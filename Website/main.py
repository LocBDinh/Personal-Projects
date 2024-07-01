from nicegui import ui
import json

# Load data from JSON file
with open('employees.json') as f:
    data = json.load(f)
    # Extract the JSON data
    columns = [
        {'name': 'id', 'label': 'ID', 'field': 'id'},
        {'name': 'name', 'label': 'Name', 'field': 'name'},
        {'name': 'email', 'label': 'Email', 'field': 'email'},
        {'name': 'position', 'label': 'Position', 'field': 'position'},
        {'name': 'salary', 'label': 'Salary', 'field': 'salary'}
    ]
    rows = data['employee_data']

# Navigation Bar
def nav_bar():
    # Tabs for Page Routes
    with ui.row():
        with ui.tabs().classes('w-full') as tabs:
            tabZero = ui.tab('Home')
            tabOne = ui.tab('Employee')
            tabTwo = ui.tab('Employer')
            tabThree = ui.tab('Add Employees')
            tabFour = ui.tab('Dark or Light Mode')
    with ui.tab_panels(tabs, value=5).classes('w-full'):
        with ui.tab_panel(tabZero):
            ui.label('Click here to return to the home page.')
            ui.link('Home', '/')
        with ui.tab_panel(tabOne):
            ui.label('Click here for the current list of employees.')
            ui.link('Employee Names', '/employee')
        with ui.tab_panel(tabTwo):
            ui.label('Click here to learn about our lord and savior.')
            ui.link('Employer Facts', '/employer')
        with ui.tab_panel(tabThree):
            ui.label('Click here to add an employee.')
            ui.link('Add Employees', '/add')
        with ui.tab_panel(tabFour):
            # Dark Mode Option
            dark = ui.dark_mode()
            ui.label('Switch mode:')
            ui.button('Dark', on_click=dark.enable).classes('w-full')
            ui.button('Light', on_click=dark.disable).classes('w-full')

# Add Employee Function
def add_employee(name, email, position, salary):
    new_id = max((int(dx['id']) for dx in rows), default=-1) + 1
    new_employee = {
        'id': new_id,
        'name': name,
        'email': email,
        'position': position,
        'salary': salary
    }
    rows.append(new_employee)
    ui.notify(f'Added new employee: {name}')
    ui.update()
    # Write to JSON file
    with open('employees.json', 'w') as f:
        json.dump({'employee_data': rows}, f, indent=4)
    ui.update()

@ui.page('/')
async def home():
    ui.page_title('Home Page')
    # Tailwind CSS Implementation for Header
    ui.add_head_html('''<style type='text/tailwindcss'>
        h2 {
            class='text-4xl font-bold tracking-tight text-white sm:text-6xl'
            }
        </style>''')
    ui.html('<h2>Welcome to Modern Development</h2>')
    ui.separator()
    nav_bar()
    ui.separator()

@ui.page('/employee')
async def employee():
    nav_bar()
    ui.separator()
    ui.row()
    ui.page_title('List of Employees')
    with ui.expansion('Full Employee List', icon='work').classes('w-full'):
        ui.label(f'Here is the current list of employees.')
        ui.table(columns=columns, rows=rows, row_key='name').classes('w-full')
    
@ui.page('/employer')
async def employer():
    nav_bar()
    ui.separator()
    ui.page_title('Employer Facts')
    ui.markdown('# **Tri Nguyen**')
    ui.markdown('## CEO of Modern Development')
    ui.markdown('### Facts:')
    ui.markdown('1. He is a great boss.')
    ui.markdown('2. He is a great boss.')
    ui.markdown('3. He is a great boss.')

@ui.page('/add')
async def add():
    nav_bar()
    ui.separator()
    ui.page_title('Add Employees')
    ui.markdown('### New Employee Form')
    # Input Fields
    name_input = ui.input(label='Name').props('filled')
    email_input = ui.input(label='Email').props('filled')
    # Dropdown menu for position
    with ui.dropdown_button('Select Position', auto_close=True):
        ui.item('Project Manager', on_click=lambda: position_input.set_value('Project Manager'))
        ui.item('Software Developer', on_click=lambda: position_input.set_value('Software Developer'))
        ui.item('Human Resources', on_click=lambda: position_input.set_value('Human Resources'))
        ui.item('Marketing', on_click=lambda: position_input.set_value('Marketing'))
        position_input = ui.input(label='Current Position').props('filled')
    salary_input = ui.input(label='Salary').props('filled')
    
    # Submit Button
    def submit():
        name = name_input.value
        email = email_input.value
        position = position_input.value
        salary = salary_input.value
        if not name or not email or not position or not salary:
            ui.notify('Please fill out all fields', type='error')
        else:
            add_employee(name, email, position, salary)
    ui.button('Add Employee', on_click=submit).classes('w-full')

ui.run()
