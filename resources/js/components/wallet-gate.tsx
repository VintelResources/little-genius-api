import { useState } from "react";

type EthereumProvider = {
    request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};

declare global {
    interface Window {
        ethereum?: EthereumProvider;
    }
}

type WalletGateProps = {
    onConnected: (address: string) => void;
};

export default function WalletGate({ onConnected }: WalletGateProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const connectWallet = async () => {
        setError("");

        if (!window.ethereum) {
            setError("No compatible wallet was found. Install MetaMask, Coinbase Wallet, Trust Wallet, or another EVM wallet.");
            return;
        }

        try {
            setLoading(true);

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            }) as string[];

            const address = accounts?.[0];

            if (!address) {
                throw new Error("No wallet account was selected.");
            }

            onConnected(address);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Wallet connection was cancelled.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="wallet-gate">
            <style>{`
                .wallet-gate {
                    min-height: 100vh;
                    display: grid;
                    place-items: center;
                    padding: 24px;
                    background:
                        radial-gradient(circle at 15% 5%, rgba(97, 80, 255, .22), transparent 26rem),
                        radial-gradient(circle at 85% 90%, rgba(85, 180, 255, .14), transparent 28rem),
                        #f4f6fb;
                    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
                }

                .wallet-card {
                    width: min(100%, 540px);
                    padding: 42px;
                    border: 1px solid #e8eaf4;
                    border-radius: 30px;
                    background: rgba(255,255,255,.96);
                    box-shadow: 0 25px 70px rgba(36, 48, 85, .14);
                    text-align: center;
                }

                .wallet-logo {
                    width: 58px;
                    height: 58px;
                    display: grid;
                    place-items: center;
                    margin: 0 auto 20px;
                    border-radius: 19px;
                    color: white;
                    background: linear-gradient(135deg, #5a4bed, #4335dc);
                    font-weight: 900;
                    box-shadow: 0 14px 28px rgba(81, 65, 233, .26);
                }

                .wallet-card h1 {
                    margin: 0;
                    color: #17213a;
                    font-size: 32px;
                    letter-spacing: -1.4px;
                }

                .wallet-card p {
                    margin: 14px auto 0;
                    max-width: 420px;
                    color: #74809a;
                    line-height: 1.65;
                    font-size: 15px;
                }

                .wallet-button {
                    width: 100%;
                    margin-top: 30px;
                    padding: 16px 20px;
                    border: 0;
                    border-radius: 15px;
                    color: white;
                    background: linear-gradient(135deg, #5a4bed, #4537dc);
                    box-shadow: 0 14px 25px rgba(80,65,230,.25);
                    font-size: 16px;
                    font-weight: 900;
                    cursor: pointer;
                }

                .wallet-button:disabled {
                    opacity: .65;
                    cursor: wait;
                }

                .wallet-note {
                    margin-top: 18px !important;
                    color: #9aa4b8 !important;
                    font-size: 12px !important;
                }

                .wallet-error {
                    margin-top: 18px !important;
                    color: #d14365 !important;
                    font-size: 13px !important;
                }
            `}</style>

            <section className="wallet-card">
                <div className="wallet-logo">LG</div>
                <h1>Connect your wallet</h1>
                <p>
                    A connected wallet is required to access Little Genius learning,
                    earn Genius Coins, and protect your progress.
                </p>

                <button
                    type="button"
                    className="wallet-button"
                    onClick={connectWallet}
                    disabled={loading}
                >
                    {loading ? "Connecting wallet..." : "Connect Wallet"}
                </button>

                {error ? <p className="wallet-error">{error}</p> : null}

                <p className="wallet-note">
                    You will never be asked for your recovery phrase or private key.
                </p>
            </section>
        </main>
    );
}
