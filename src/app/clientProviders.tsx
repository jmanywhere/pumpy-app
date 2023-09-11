"use client";

import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";

import { chains, config, walletConnectProjectId } from "@/configs/wagmiConfigs";

const ethereumClient = new EthereumClient(config, chains);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      {children}
      <Web3Modal
        projectId={walletConnectProjectId}
        ethereumClient={ethereumClient}
        themeVariables={{
          "--w3m-accent-color": "#FFB000",
          "--w3m-accent-fill-color": "#000001",
        }}
      />
    </WagmiConfig>
  );
}
