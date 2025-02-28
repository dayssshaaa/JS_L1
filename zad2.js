function ipv4Parser(ip, subnet) {
    const ipParts = ip.split('.').map(Number);
    const subnetParts = subnet.split('.').map(Number);
    
    const networkBlockParts = [];
    const hostIdentifierParts = [];
    
    for (let i = 0; i < 4; i++) {
        const networkPart = ipParts[i] & subnetParts[i];
        const hostPart = ipParts[i] & ~subnetParts[i];
        
        networkBlockParts.push(networkPart);
        hostIdentifierParts.push(hostPart);
    }
    
    const networkBlock = networkBlockParts.join('.');
    const hostIdentifier = hostIdentifierParts.join('.');
    
    return [networkBlock, hostIdentifier];
}

// Пример использования:
const ip = '192.168.2.1';
const subnet = '255.255.255.0';

const [networkBlock, hostIdentifier] = ipv4Parser(ip, subnet);

console.log(`Network Block: ${networkBlock}`); // Output: 192.168.2.0
console.log(`Host Identifier: ${hostIdentifier}`); // Output: 0.0.0.1
