import ServiceApi from "./bookstore-service-context";

import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("service api", () => {
    test('should first', async () => {
         const response = [{
             name: 'Luke Skywalker',
             height: '172',
             mass: '77',
             hair_color: 'blond',
             skin_color: 'fair',
             eye_color: 'blue',
             birth_year: '19BBY',
             gender: 'male',
             homeworld: 'https://swapi.dev/api/planets/1/',
             films: [Array],
             species: [],
             vehicles: [Array],
             starships: [Array],
             created: '2014-12-09T13:50:51.644000Z',
             edited: '2014-12-20T21:17:56.891000Z',
             url: 'https://swapi.dev/api/people/1/'
           }]

        mockedAxios.get.mockResolvedValue({ data: response });

        const booksServiceApi = new ServiceApi();

        const date = await booksServiceApi.getDate(booksServiceApi._usrlSwapi);

        expect(date).toEqual(response);
    })
})