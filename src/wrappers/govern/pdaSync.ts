import { utils } from "@project-serum/anchor";
import type { PublicKey } from "@saberhq/solana-contrib";
import { getProgramAddress } from "@saberhq/solana-contrib";
import type { u64 } from "@saberhq/token-utils";

import { STRUCTA_ADDRESSES } from "../../constants";

/**
 * gets the PDA of a Governor.
 */
export const getGovernorAddress = (base: PublicKey): PublicKey => {
  return getProgramAddress(
    [utils.bytes.utf8.encode("StructaGovernor"), base.toBuffer()],
    STRUCTA_ADDRESSES.Govern
  );
};

/**
 * gets the PDA of a Proposal.
 */
export const getProposalAddress = (
  governorKey: PublicKey,
  index: u64
): PublicKey => {
  return getProgramAddress(
    [
      utils.bytes.utf8.encode("StructaProposal"),
      governorKey.toBuffer(),
      index.toArrayLike(Buffer, "le", 8),
    ],
    STRUCTA_ADDRESSES.Govern
  );
};

/**
 * gets the PDA of a Vote.
 * @param proposalKey
 * @param voterKey
 * @returns
 */
export const getVoteAddress = (
  proposalKey: PublicKey,
  voterKey: PublicKey
): PublicKey => {
  return getProgramAddress(
    [
      utils.bytes.utf8.encode("StructaVote"),
      proposalKey.toBuffer(),
      voterKey.toBuffer(),
    ],
    STRUCTA_ADDRESSES.Govern
  );
};

/**
 * gets the address of a ProposalMeta.
 * @param proposalKey
 * @returns
 */
export const getProposalMetaAddress = (proposalKey: PublicKey): PublicKey => {
  return getProgramAddress(
    [utils.bytes.utf8.encode("StructaProposalMeta"), proposalKey.toBuffer()],
    STRUCTA_ADDRESSES.Govern
  );
};
