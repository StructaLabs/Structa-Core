# Structa

[![License](https://img.shields.io/badge/license-AGPL%203.0-blue)](https://github.com/StructaLabs/structa-core/blob/master/LICENSE)

<p align="center">
    <img src="/images/banner.png" />
</p>

<p align="center">
    A modular framework for building decentralized governance on Solana.
</p>

- [Website](https://structalabs.com)
- [Twitter](https://x.com/StructaLabs)
- [GitHub](https://github.com/StructaLabs)
- [Official documentation](https://docs.structalabs.com/)

## Overview

Structa is a modular open source protocol built for launching DAOs on Solana. Inspired by systems like Compound and Curve, Structa provides foundational governance architecture while prioritizing flexibility, simplicity, and composability.

## Key Features

- **Anchor-Native.** Seamlessly integrates with Anchor-based projects across the Solana ecosystem.
- **Modular Architecture.** Proposals, voting, execution, and locking mechanisms are split into decoupled programs use what you need, extend when you're ready.
- **Shared Standard.** Structa's governance logic is built to be deployed once, serving as a shared foundation for any project no need to fork, redeploy, or hand over token custody.
- **Minimalist Core.** Structa provides only what’s essential, leaving the configuration of governance rules in your hands.

Explore the [documentation](https://docs.structalabs.com/) to get started.

## ⚠️ Notice

- **Structa is under active development. Interfaces and APIs may evolve.**
- **This codebase is not audited. Please use with caution.**

## Packages

| Package                  | Description                                                                                                               | Version                                                                                                                 | Docs                                                                                  |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `govern`                 | Proposal creation, weighted voting, and transaction queueing with Smart Wallets. [Smart Wallet](https://docs.structalabs.com/goki/smart-wallet). | [![Crates.io](https://img.shields.io/crates/v/govern)](https://crates.io/crates/govern)                                 | [![Docs.rs](https://docs.rs/govern/badge.svg)](https://docs.rs/govern)                |
| `locked-voter`           | 	Token-based voting with time-locked weight boosts. Ideal for long-term aligned governance.               | [![crates](https://img.shields.io/crates/v/locked-voter)](https://crates.io/crates/locked-voter)                        | [![Docs.rs](https://docs.rs/locked-voter/badge.svg)](https://docs.rs/locked-voter)    |
| `simple-voter`           | Straightforward voter program — one token, one vote.                                                                    | [![crates](https://img.shields.io/crates/v/simple-voter)](https://crates.io/crates/simple-voter)                        | [![Docs.rs](https://docs.rs/simple-voter/badge.svg)](https://docs.rs/simple-voter)    |

## Deployment

Structa programs are deployed consistently across devnet and mainnet-beta. For full deployment details, refer to the [documentation.](https://docs.structalabs.com/)

## License

Structa is released under the GNU Affero General Public License v3.0.

This license ensures that any modifications remain open source, even when used in private deployments. If you require alternative licensing, please reach out to the team at [team@structalabs.com](mailto:team@structalabs.com).
