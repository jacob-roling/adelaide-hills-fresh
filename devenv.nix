{ pkgs, lib, config, inputs, ... }:

let
  pkgs-unstable-small = import inputs.nixpkgs-unstable-small { system = pkgs.stdenv.system; };
in
{
  languages.javascript = {
    enable = true;
    pnpm.enable = true;
    bun.enable = true;
  };

  languages.deno = {
    enable = false;
    package = pkgs-unstable-small.deno;
  };
}
