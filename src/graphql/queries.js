/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEarnings = /* GraphQL */ `
  query GetEarnings($id: ID!) {
    getEarnings(id: $id) {
      id
      name
      description
      week
      day
      weekly_amount
      batches
      instacart_payment
      customer_tips
      earnings_adjustment
      one_time_payment
      time_card_current
      time_card_last
      daily_earnings
      createdAt
      updatedAt
    }
  }
`;
export const listEarnings = /* GraphQL */ `
  query ListEarnings(
    $filter: ModelEarningsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEarnings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        week
        day
        weekly_amount
        batches
        instacart_payment
        customer_tips
        earnings_adjustment
        one_time_payment
        time_card_current
        time_card_last
        daily_earnings
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
