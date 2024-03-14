import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('ghr');

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  });
});

export {};
