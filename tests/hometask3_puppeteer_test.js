Feature("Add tasks")

Before((I) => {
    I.amOnPage('/')
}) 

Scenario('Add task', async (I) => {
    I.fillField('#new-todo', 'new task')
    I.pressKey('Enter')
    I.see('new task')
})

Scenario('Move task to complete status', async(I) => {
    I.fillField('#new-todo', 'new task')
    I.pressKey('Enter')
    I.click('#toggle-all')
    I.see('0 items left')
})

Scenario('Close new task', async(I) => {
    I.fillField('#new-todo', 'new task')
    I.pressKey('Enter')
    I.moveCursorTo('.toggle')
    I.click('.destroy')
    I.dontSee('new task')
})

Scenario('Add multiple tasks', async (I) => {
    I.fillField('#new-todo', 'new task')
    I.pressKey('Enter')
    I.fillField('#new-todo', 'other task')
    I.pressKey('Enter')
    I.see('new task')
    I.see('other task')
})

Scenario('Use should see new task in "Active" status', async (I) => {
    I.fillField('#new-todo', 'test task')
    I.pressKey('Enter')
    I.click('#filters li:nth-child(2)')
    I.see('test task')
    I.click('#filters li:nth-child(3)')
    I.dontSee('test task')

})

