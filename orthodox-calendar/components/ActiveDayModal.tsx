import { StyleSheet, Text } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";

export type Ref = BottomSheetModal;

const ActiveDayModal = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["65%"], []);
  const { dismiss } = useBottomSheetModal();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0.0}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
        onPress={dismiss}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
    >
      <Text>TEST</Text>
    </BottomSheetModal>
  );
});
export default ActiveDayModal;

const styles = StyleSheet.create({});
