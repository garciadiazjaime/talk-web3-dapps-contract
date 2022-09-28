const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MakeMakesickoNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    const nftBase64 = 'eyJuYW1lIjoiTkZUIGNyZWF0ZWQgYnkgamltbXkuanVtcHMgYXQgaUpTIDIwMjIgfCAxIiwiZGVzY3JpcHRpb24iOiJKaW1teSBKdW1wcyBzaGFyZWQgYSBwb3N0IG9uIEluc3RhZ3JhbTogXCJMaWZlIGlzIHNob3J0LCB0aGUgYXJ0IGxvbmcuIC1IaXBwb2NyYXRlc1xuLlxuLlxuLlxuI2p1bXBvZnRoZWRheSAjanVtcGluZ2Fyb3VuZHRoZXdvcmxkICNtaWxvc2dyZWVjZfCfh6zwn4e3ICNtaWxvc2lzbGFuZG9mY29sb3JzICNncmVlY2V0cmF2ZWxzXCIuIEZvbGxvdyB0aGVpciBhY2NvdW50IHRvIHNlZSAyMTcgcG9zdHMuIiwiaW1hZ2UiOiJodHRwczovL3Njb250ZW50LW9yZDUtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI5MzUwLTE1LzMwNjE5MTc1M183NTU1NTgwNDg4NDA0OTVfMjU2Njc3ODY4MDc1NTYzNzYzOF9uLmpwZz9zdHA9ZHN0LWpwZ19zNjQweDY0MCZfbmNfY2F0PTEwOCZjY2I9MS03Jl9uY19zaWQ9OGFlOWQ2Jl9uY19vaGM9akNQWW9FaEZoX0FBWF82bW1TcSZfbmNfaHQ9c2NvbnRlbnQtb3JkNS0xLmNkbmluc3RhZ3JhbS5jb20mb2g9MDBfQVQ4LURrLXB3WDdCakUzN09rVDFXZVF4NWItTDNPeENBZGZDYkJnNkpweF85USZvZT02MzM1QUNFRCJ9'
    // Call the function.
    let txn = await nftContract.makeMakesickoNFT(nftBase64)
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
