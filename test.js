var network = require('./lib');

async function test(){
  try{
    let publicIp = await network.get_public_ip();
    console.log('Public IP --- ',publicIp);
    
    let privateIp = await network.get_private_ip();
    console.log('Private IP --- ',privateIp);
    
    let gatewayIp = await network.get_gateway_ip();
    console.log('Gateway IP --- ',gatewayIp);
    
    let activeNetworkInterface = await network.get_active_interface();
    console.log('Active Network Interface --- ',activeNetworkInterface);
    
    let networkInterfacesList = await network.get_interfaces_list();
    console.log('Network Interfaces List --- ',networkInterfacesList);
    
  }catch(err){
    throw err;
  };
};
test();
