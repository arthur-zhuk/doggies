async function main() {
  const Doggies = await ethers.getContractFactory("Doggies");

  // Start deployment, returning a promise that resolves to a contract object
  const doggies = await Doggies.deploy();
  console.log("Contract deployed to address:", doggies.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
