import{test, expect} from '@playwright/test';
const url = 'https://sdetqa.vercel.app/autoplay';
test.beforeEach('openpage URL',async({page})=>{
    await page.goto(url);
    expect(page.getByText('AutoPlay')).toBeVisible();
});

test('single select drop down country',async({page})=>{
    console.log('locate contry drop down , & drop down should be visible');
        const countryselect =  page.locator('#country')
        await expect(countryselect).toBeVisible()
            
   // console.log('get default select value, & default should be India');
        await expect(countryselect).toHaveValue('india')
    
   // console.log('Select option using label "USA" , &  value should change to USA');
        await countryselect.selectOption({label:'USA'})
        //await countryselect.selectOption({value:'usa'})
        //await countryselect.selectOption({index:1})
        await expect(countryselect).toHaveValue('usa');

    //console.log('select option using index 3, & value should change to value at index 3');
        await countryselect.selectOption({index: 3})
        await expect(countryselect).toHaveValue('germany')

    //console.log('select option using value & label as France & value should be france');
        await countryselect.selectOption({value: 'france', label: 'France'})
        await expect(countryselect).toHaveValue('france')

    //console.log('count total drop down options & count should be 5');
        const options = countryselect.getByRole('option')
        await  expect(options).toHaveCount(5)


    //console.log('get all options text & list should contain germany');
        const optionstext = await options.allTextContents()
        expect(optionstext).toContain('Germany')

    //console.log('print drop down options & all options should be displayed in console');
        for (const option of optionstext) {
            console.log(option)
        }
}) 