import {Dropdown} from './Dropdown'
import {User} from './user'

var x = User[0]

export const DropdownItem: Dropdown[]=[
    
    {
        name: 'Accounts',
        color: 'green',
        Titles: x.astTitle,
        Value: x.astValue,

    },
    {
        name: 'Expensives',
        color: 'red',
        Titles:x.expTitle,
        Value: x.expValue,

        
    }
]