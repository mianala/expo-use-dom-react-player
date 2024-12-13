import { Image, StyleSheet, Platform, View } from "react-native"

import { HelloWave } from "@/components/HelloWave"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import VideoPlayer from "@/components/react-player"

export default function HomeScreen() {
  return (
    <VideoPlayer url={"https://www.youtube.com/watch?v=jU4_1vpjahw&t=3656s"} />
  )
}
