> this package is promisify [network](https://github.com/tomas/network) package, if you not need **Promise** , you can direct use [network](https://github.com/tomas/network)

Promise Network Utilies for Node.js
===========================

# Install

    $ npm install promise-network

# Usage

## Get public IP

Returns your public IP address, as reported by DynDNS.org or other services.

``` js
const network = require('promise-network');

let ip = await network.get_public_ip(); //should return your public IP address
```

##### CLI

    $ network public_ip

## Get private IP

Returns the IP address assigned to your first active network inteface.

``` js
let ip = await network.get_private_ip();
```

##### CLI

    $ network private_ip

## Get gateway IP

Returns the IP of the gateway that your active network interface is linked to.

``` js
let ip = await network.get_gateway_ip(); //err may be 'No active network interface found.'
```

##### CLI

    $ network gateway_ip

## Get active interface

Returns the IP, MAC address and interface type for the active network
interface. On OS X and Linux you also get the IP of its assigned gateway.

``` js
/**
 *
 * { 
 *    name: 'eth0',
 *   ip_address: '10.0.1.3',
 *   mac_address: '56:e5:f9:e4:38:1d',
 *   type: 'Wired',
 *   netmask: '255.255.255.0',
 *   gateway_ip: '10.0.1.1' 
 * }
 *
*/
let obj = await network.get_active_interface();
```

##### CLI

    $ network active_interface

## Get interfaces list

Returns list of network interfaces, including MAC addresses and the such, just
as in the example above.

``` js
/**
 *
 * [
 *    { 
 *      name: 'eth0',
 *      ip_address: '10.0.1.3',
 *      mac_address: '56:e5:f9:e4:38:1d',
 *      type: 'Wired',
 *      netmask: '255.255.255.0',
 *      gateway_ip: '10.0.1.1' 
 *    }
 * ]
 *
*/

let list = await network.get_interfaces_list();
```

##### CLI

    $ network interfaces_list

# Copyright

Written by Tomás Pollak. Copyright (c) Fork, Ltd.

# License

MIT.

