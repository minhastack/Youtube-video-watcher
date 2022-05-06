module.exports = enviromentChecker = (dotenv_package_dev)=> {
    let inProducion = Boolean;
    dotenv_package_dev ? inProducion = false: inProducion= true;
    return inProducion;
} 
