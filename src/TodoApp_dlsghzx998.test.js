import react from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp_dlsghzx998 from './TodoApp_dlsghzx998';

describe('<TodoApp_dlsghzx998 />', () => {
    it('renders TodoFrom TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp_dlsghzx998 />);
        getByText('등록'); // TodoForm 화면에 있는지 확인
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
});