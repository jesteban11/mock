describe('Test', () => {
    let interceptRequests;
    it('Open demoblaze', async () => {
        interceptRequests = await browser.mock('**');
        await browser.url('https://www.demoblaze.com/');
    })

    it('Intercept browser requests', async () => {
        const demoBlazeApi = await browser.waitUntil(async () => await interceptRequests.calls.find((call) => call.url === 'https://api.demoblaze.com/entries'));
        console.log(demoBlazeApi);
    })
})