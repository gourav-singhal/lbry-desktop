// @flow

// Currently incomplete

export type Source = {
  contentType: string,
  source: string,
  sourceType: string,
  version: string,
};

export type Metadata = {
  nsfw: boolean,
  title: string,
  thumbnail: ?string,
  description: ?string,
  license: ?string,
  language: string,
  fee?:
    | {
        amount: number, // should be a string https://github.com/lbryio/lbry/issues/1576
        currency: string,
        address: string,
        version: string,
      }
    | {
        // We don't include a version or address in the metadata field when publishing
        amount: number,
        currency: string,
      },
};

// Actual claim type has more values than this
// Add them as they are used
export type Claim = {
  address: string,
  amount: number,
  claim_id: string,
  claim_sequence: number,
  decoded_claim: boolean,
  depth: number,
  effective_amount: number,
  has_signature: boolean,
  height: number,
  has_signature: boolean,
  hex: string,
  name: string,
  nout: number,
  permanent_url: string,
  channel_name: ?string,
  txid: string,
  nout: number,
  signature_is_valid: boolean,
  valid_at_height: number,
  value: ?{
    publisherSignature: ?{
      certificateId: string,
    },
    stream: {
      metadata: Metadata,
      source: Source,
    },
  },
};
