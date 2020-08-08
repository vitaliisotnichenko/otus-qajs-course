

Feature("Add tasks")

Before((I) => {
    I.amOnPage('/')
}) 

Scenario('Add task with plain text', (I) => {
    I.fillField('#new-todo', 'new task')
    I.pressKey('Enter')
    I.see('new task')
})

Data(function*() {
    yield { text: 'undefined'};
    yield { text: 'undef'};
    yield { text: 'null'};
    yield { text: 'true'};
    yield { text: 'False'};
  }).Scenario('Add tasks with different data', (I, current) => {
        I.fillField('#new-todo', current.text)
        I.pressKey('Enter')
        I.see(current.text)
    })