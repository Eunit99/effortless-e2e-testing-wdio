describe(`OpenReplay.com page`, () => {
  it(`should contain text`, async () => {
    await browser.url(`https://openreplay.com/`);


    await expect($(`.display-3`)).toHaveTextContaining(`Session replay`);
  })
});