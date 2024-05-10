import MockAdapter from "axios-mock-adapter";
import efexClient from "./";

const mock = new MockAdapter(efexClient, { delayResponse: 500 });

mock.onGet("/balances").reply(200, {
  result: "success",
  balances: {
    usdBalance: 1000,
    mxnBalance: 500,
    copBalance: 200,
    totalBalance: 1700,
  },
});

mock.onGet("/payments").reply(200, {
  result: "success",
  totalAmountPaymentsIn: 2100,
  paymentsIn: [
    {
      id: 1,
      amount: 100,
      currency: "usd",
      date: "2022-01-01",
    },
    {
      id: 2,
      amount: 200,
      currency: "mxn",
      date: "2022-01-02",
    },
    {
      id: 3,
      amount: 300,
      currency: "cop",
      date: "2022-01-03",
    },
    {
      id: 4,
      amount: 700,
      currency: "usd",
      date: "2022-01-07",
    },
    {
      id: 5,
      amount: 800,
      currency: "mxn",
      date: "2022-01-08",
    },
  ],
  totalAmountPaymentsOut: 2400,
  paymentsOut: [
    {
      id: 4,
      amount: 400,
      currency: "usd",
      date: "2022-01-04",
    },
    {
      id: 5,
      amount: 500,
      currency: "mxn",
      date: "2022-01-05",
    },
    {
      id: 8,
      amount: 1000,
      currency: "mxn",
      date: "2022-01-10",
    },
    {
      id: 6,
      amount: 600,
      currency: "cop",
      date: "2022-01-06",
    },
    {
      id: 7,
      amount: 900,
      currency: "usd",
      date: "2022-01-09",
    },
  ],
});

mock.onGet("/user").reply(200, {
  result: "success",
  user: {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    username: "@johndoe",
  },
});
