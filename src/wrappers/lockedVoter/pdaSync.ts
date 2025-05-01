import { utils } from "@project-serum/anchor";
import { getProgramAddress } from "@saberhq/solana-contrib";
import type { PublicKey } from "@solana/web3.js";
import { SystemProgram } from "@solana/web3.js";

import { STRUCTA_ADDRESSES } from "../../constants";

export const getLockerAddress = (base: PublicKey): PublicKey => {
  return getProgramAddress(
    [utils.bytes.utf8.encode("Locker"), base.toBuffer()],
    STRUCTA_ADDRESSES.LockedVoter
  );
};

export const getEscrowAddress = (
  locker: PublicKey,
  authority: PublicKey
): PublicKey => {
  return getProgramAddress(
    [
      utils.bytes.utf8.encode("Escrow"),
      locker.toBuffer(),
      authority.toBuffer(),
    ],
    STRUCTA_ADDRESSES.LockedVoter
  );
};

export const getWhitelistAddress = (
  locker: PublicKey,
  programId: PublicKey,
  owner: PublicKey | null
): PublicKey => {
  return getProgramAddress(
    [
      utils.bytes.utf8.encode("LockerWhitelistEntry"),
      locker.toBuffer(),
      programId.toBuffer(),
      owner ? owner.toBuffer() : SystemProgram.programId.toBuffer(),
    ],
    STRUCTA_ADDRESSES.LockedVoter
  );
};
