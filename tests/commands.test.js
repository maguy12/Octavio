describe('Commands', () => {
  test('joke command should return a joke', async () => {
    const jokeCommand = require('../src/commands/fun/joke');
    expect(jokeCommand.name).toBe('joke');
    expect(jokeCommand.description).toContain('blague');
  });

  test('help command should return help text', async () => {
    const helpCommand = require('../src/commands/utility/help');
    expect(helpCommand.name).toBe('help');
    expect(helpCommand.description).toContain('aide');
  });

  test('info command should return bot info', async () => {
    const infoCommand = require('../src/commands/utility/info');
    expect(infoCommand.name).toBe('info');
  });
});