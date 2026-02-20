describe('Handlers', () => {
  test('messageHandler should process messages', () => {
    const messageHandler = require('../src/handlers/messageHandler');
    expect(messageHandler).toBeDefined();
    expect(messageHandler.handle).toBeDefined();
  });

  test('commandHandler should load commands', () => {
    const commandHandler = require('../src/handlers/commandHandler');
    expect(commandHandler).toBeDefined();
    expect(commandHandler.commands).toBeDefined();
  });

  test('eventHandler should process events', () => {
    const eventHandler = require('../src/handlers/eventHandler');
    expect(eventHandler).toBeDefined();
    expect(eventHandler.handle).toBeDefined();
  });
});