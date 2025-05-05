import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';
import deepmerge from 'deepmerge';

export const options: TelescopeInput = {
  protoDirs: [],
  outPath: '',
  options: {
    "classesUseArrowFunctions": true,
    "env": "v-next",
    "useInterchainJs": true,
    "useSDKTypes": false,
    "prototypes": {
      "enableRegistryLoader": false,
      "enableMessageComposer": true,
      "enabled": true,
      "parser": {
        "keepCase": false
      },
      "methods": {
        "fromJSON": false,
        "toJSON": false,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": true,
        "fromAmino": true,
        "fromProto": false,
        "toProto": false,
      },
      "addTypeUrlToDecoders": false,
      "addTypeUrlToObjects": true,
      "addAminoTypeToObjects": true,
      "typingsFormat": {
        "duration": "duration",
        "timestamp": "date",
        "useExact": false,
        "useDeepPartial": true,
        "num64": "bigint",
        "customTypes": {
          "useCosmosSDKDec": true,
          "useEnhancedDecimal": false
        },
        "useTelescopeGeneratedType": true,
        "autoFixUndefinedEnumDefault": true
      }
    },
    "bundle": {
      "enabled": false
    },
    "stargateClients": {
      "enabled": false
    },
    "lcdClients": {
      "enabled": false
    },
    "rpcClients": {
      "enabled": false
    },
    "helperFunctions": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "hooks": {
        "react": false,
        "vue": false
      }
    },
    "interfaces": {
      "enabled": true,
      "useGlobalDecoderRegistry": true,
      "registerAllDecodersToGlobal": false,
      "useUnionTypes": true
    },
    "aminoEncoding": {
      "enabled": true,
      "useLegacyInlineEncoding": false,
      "disableMsgTypes": false,
      "useProtoOptionality": true,
      "customTypes": {
        "useCosmosSDKDec": true
      }
    }
  }
};

rimraf(join(__dirname, '../libs/cosmos-types/src'));
rimraf(join(__dirname, '../libs/cosmos-vue/src'));
rimraf(join(__dirname, '../libs/cosmos-react/src'));
rimraf(join(__dirname, '../libs/titan-types/src'));
rimraf(join(__dirname, '../libs/titan-vue/src'));
rimraf(join(__dirname, '../libs/titan-react/src'));

// cosmos-types
telescope({
  protoDirs: [join(__dirname, '../protos/titanlabjs')],
  outPath: join(__dirname, '../libs/cosmos-types/src'),
  options: deepmerge(options.options, {
    "prototypes": {
      "enableRegistryLoader": false,
      "enableMessageComposer": false,
      "methods": {
        "fromJSON": false,
        "toJSON": false,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": false,
        "fromAmino": false,
        "fromProto": false,
        "toProto": false,
      },
    },
    "interfaces": {
      "enabled": false
    },
    "aminoEncoding": {
      "enabled": false
    },
    "stargateClients": {
      "enabled": false
    },
    "lcdClients": {
      "enabled": false
    },
    "rpcClients": {
      "enabled": false
    }
  })
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// titanlabjs
// telescope({
//   protoDirs: [join(__dirname, '../protos/titanlabjs')],
//   outPath: join(__dirname, '../libs/cosmos-types/src'),
//   options: options.options
// })
//   .then(() => {
//     console.log('✨ all done!');
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

// interchain-vue
telescope({
  protoDirs: [join(__dirname, '../protos/titanlabjs')],
  outPath: join(__dirname, '../libs/cosmos-vue/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "vue": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// interchain-react
telescope({
  protoDirs: [join(__dirname, '../protos/titanlabjs')],
  outPath: join(__dirname, '../libs/cosmos-react/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "react": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// injectivejs
telescope({
  protoDirs: [join(__dirname, '../protos/titanlabjs')],
  outPath: join(__dirname, '../libs/titan-types/src'),
  options: options.options
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// injective-vue
telescope({
  protoDirs: [join(__dirname, '../protos/titanlabjs')],
  outPath: join(__dirname, '../libs/titan-vue/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "vue": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

// injective-react
telescope({
  protoDirs: [join(__dirname, '../protos/titanlabjs')],
  outPath: join(__dirname, '../libs/titan-react/src'),
  options: deepmerge(options.options, {
    "helperFunctions": {
      "hooks": {
        "react": true
      }
    },
  }),
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
