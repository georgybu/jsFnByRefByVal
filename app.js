const print = (label, ...objects) => {
    console.log('\n');
    console.group(`--- ${label} ---`);
    objects.forEach(o => console.log(
        JSON.stringify(o, null, 2)
    ));
    console.groupEnd();
    console.log('\n');
};

// Got object
const fn0 = (user) => {
    user.name += 'Test';
    user.age += 2;
    console.log(`fn0`, user.name, user.age);
};

// Got 2 params
const fn1 = (name, age) => {
    name += 'Test';
    age += 2;
    console.log(`fn1`, name, age);
};

// Got something (?)
const fn2 = ({name, age}) => {
    name += 'Test';
    age += 2;
    console.log(`fn2`, name, age);
};

const appComponent = () => {
    let user = {name: 'Georgy', age: 30,};

    let name = 'Iliya';
    let age = 14;
    let otherUser = {name, age};

    print(`Before`, user, otherUser);

    // fn0(user);
    // fn0(otherUser);

    // fn1(user.name, user.age);
    // fn1(name, age);

    // fn2({...user});
    // fn2(user);
    // fn2({name, age});

    print(`After`, user, otherUser);
};

appComponent();
