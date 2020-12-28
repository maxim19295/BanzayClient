import { AddressPage } from "./AddressPage/AddressPage";
import { JournalPage } from "./AdminPages/JournalPage/JournalPage";
import { UsersPage } from "./AdminPages/UsersPage/UsersPage";
import { GoodEditPage } from "./AdminPages/GoodEditPage/GoodEditPage";
import { ConsolePage } from "./ConsolePage/ConsolePage";
import { OrdersPage } from "./OrdersPage/OrdersPage";
import { DetailsPage } from './DetailsPage/DetailsPage';

export const AccountBlock = ({name}) =>{
    let component = null;
    switch(name){
        case null || undefined: component=<ConsolePage/>
        break;
        case 'orders': component=<OrdersPage/>
        break;
        case 'address': component=<AddressPage/>
        break;
        case 'details': component=<DetailsPage/>
        break;
        case 'users': component=<UsersPage/>
        break;
        case 'edit_goods': component=<GoodEditPage/>
        break;
        case 'visit_journal': component=<JournalPage/>
        break;

    }
    return <div>
        {component}
    </div>
}