/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEarnings = /* GraphQL */ `
  mutation CreateEarnings(
    $input: CreateEarningsInput!
    $condition: ModelEarningsConditionInput
  ) {
    createEarnings(input: $input, condition: $condition) {
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
export const updateEarnings = /* GraphQL */ `
  mutation UpdateEarnings(
    $input: UpdateEarningsInput!
    $condition: ModelEarningsConditionInput
  ) {
    updateEarnings(input: $input, condition: $condition) {
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
export const deleteEarnings = /* GraphQL */ `
  mutation DeleteEarnings(
    $input: DeleteEarningsInput!
    $condition: ModelEarningsConditionInput
  ) {
    deleteEarnings(input: $input, condition: $condition) {
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
