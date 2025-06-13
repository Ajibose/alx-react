import { render, screen} from '@testing-library/react';
import Notificaion from './Notifications';
import '@testing-library/jest-dom';


describe('./Notification.js', () => {
    beforeEach(() => {
        render(<Notificaion />);
    });

    test('Notification renders without crashing', () => {
        expect(true).toBe(true);
    });

    test('Notification renders three list items', () => {
        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(3);
    });

    test('Notification renders the correct text', () => {
        expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    });
});

/* enzyme */

/*
import { shallow } from "enzyme";
import Notificaion from "./Notifications.js";

describe('./Notification.js', () => {
    test('Notification renders without crashing', () => {
        shallow(<Notification />)
    });

    test('Notification renders three list items', () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    test('Notification renders the text', () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
    });
});
*/