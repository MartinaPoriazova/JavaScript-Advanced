function solve(input) {
   
    function createCommander() {
        let content = [];
    
        return {
            add: (s) => content.push(s),
            remove: (s) => content = content.filter(el => el !== s),
            print: () => console.log(content.join(','))
        };
    }

    let commander = createCommander();

    input.forEach(element => {
        let [command, value] = element.split(' ');
        commander[command](value);
        
    });

}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);