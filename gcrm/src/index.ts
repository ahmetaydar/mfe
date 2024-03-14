import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('gcrm');

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  });
});

export {};
