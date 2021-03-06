import { ServiceApi } from "../../service";

import axios from "axios";
import { responsTest } from "../mock/axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("service api", () => {
    test('should first', async () => {
        mockedAxios.get.mockResolvedValue({ data: responsTest });

        const booksServiceApi = new ServiceApi();

        const date = await booksServiceApi.getDate();

        expect(date).toEqual(responsTest);
    })
})