import { Text, View } from "react-native";
import React from 'react'
import { XStack, YStack, ZStack } from 'tamagui'


export default function Index() {
  return (
      <XStack
          flex={1}
          flexWrap="wrap"
          backgroundColor="#FF0000"
          paddingTop={30}
          paddingLeft={20}
          hoverStyle={{
              backgroundColor: 'red',
          }}
          // media query
          $gtSm={{
              flexDirection: 'column',
              flexWrap: 'nowrap',
          }}

      >
          <YStack gap="$3">
              <Text>Hello</Text>
              <Text>World</Text>
          </YStack>
      </XStack>
  );
}
