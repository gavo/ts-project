(() => {
  let myDynamicVar: any;
  console.log('myDynamicVar', myDynamicVar);

  myDynamicVar = 100;
  console.log('myDynamicVar', myDynamicVar);

  myDynamicVar = 'algo';
  console.log('myDynamicVar', myDynamicVar);

  myDynamicVar = true;
  console.log('myDynamicVar', myDynamicVar);

  myDynamicVar = {};
  console.log('myDynamicVar', myDynamicVar);

  myDynamicVar = 'algo';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log('rta', rta);

  myDynamicVar = 1234;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log('rta2', rta2);
})();
