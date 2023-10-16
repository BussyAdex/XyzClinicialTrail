import { render, waitFor } from '@testing-library/react';
import { DataProvider, DataContext } from './path-to-data-context-file'; 
import useAxiosFetch from '../hooks/useAxiosFetch';
const React = require('react');
// Mock the `useAxiosFetch` hook
jest.mock('../hooks/useAxiosFetch');

describe('DataProvider', () => {
  it('fetches and sets data on successful fetch', async () => {
    // Mocked response
    const mockData = [
      { name: 'Test Name', condition: 'Test Condition', patientId: '12345' }
    ];
    
    // Using the mocked version of useAxiosFetch to return our mockData
    useAxiosFetch.mockReturnValue({
      data: mockData,
      fetchError: null,
      isLoading: false,
    });

    const TestChild = () => {
      const context = React.useContext(DataContext);
      return <div>{context.posts[0].name}</div>;
    };

    const { getByText } = render(
      <DataProvider>
        <TestChild />
      </DataProvider>
    );
    await waitFor(() => {
      expect(getByText('Test Name')).toBeInTheDocument();
    });
  });
});