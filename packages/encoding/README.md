# @titanlabjs/encoding

<p align="center">
  <img src="https://raw.githubusercontent.com/hyperweb-io/titanlabjs/refs/heads/main/assets/logo.svg" width="280">
</p>

<p align="center" width="100%">
  <a href="https://github.com/hyperweb-io/titanlabjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/hyperweb-io/titanlabjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/hyperweb-io/titanlabjs/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://github.com/hyperweb-io/titanlabjs/blob/main/LICENSE-Apache"><img height="20" src="https://img.shields.io/badge/license-Apache-blue.svg"></a>
</p>

This package is an extension to the JavaScript standard library that is not
bound to blockchain products. It provides basic hex/base64/ascii encoding to
Uint8Array that doesn't rely on Buffer and also provides better error messages
on invalid input.

## Convert between bech32 and hex addresses

```
>> toBech32("tiov", fromHex("1234ABCD0000AA0000FFFF0000AA00001234ABCD"))
'tiov1zg62hngqqz4qqq8lluqqp2sqqqfrf27dzrrmea'
>> toHex(fromBech32("tiov1zg62hngqqz4qqq8lluqqp2sqqqfrf27dzrrmea").data)
'1234abcd0000aa0000ffff0000aa00001234abcd'
```
