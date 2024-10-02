"use client";
import { tabsToRender } from "@/utils/consts";
import { selectedStyles } from "@/utils/stylesHelpers";
import Link from "next/link";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

export default function TabsLayout() {
  const pathName = usePathname();

  return (
    <Tabs
      // variant="isLazy"
      className="w-full fixed bottom-5 "
      variant="unstyled"
    >
      <TabList className="w-full justify-between">
        {tabsToRender.map((tabInfo, index) => {
          const { Icon } = tabInfo;
          return (
            <Tab key={index}>
              <Link
                href={tabInfo.route}
                className="flex flex-col justify-center items-center gap-1"
              >
                <Icon
                  style={selectedStyles({
                    currentPathName: pathName,
                    matchPathName: tabInfo.route,
                    stylesFalse: {
                      fill: "white",
                      transition: "all 0.2s", // Asegúrate de tener la transición aquí
                    },
                    stylesTrue: {
                      fill: "#3540E8",
                      transform: "scale(0.8)",
                      transition: "all 0.2s", // Agrega la misma transición aquí para suavizar el cambio
                    },
                  })}
                />
                <p
                  className="text-xs font-medium"
                  style={{
                    color: selectedStyles({
                      currentPathName: pathName,
                      matchPathName: tabInfo.route,
                      stylesFalse: "white",
                      stylesTrue: "#3540E8",
                    }),
                  }}
                >
                  {tabInfo.title}
                </p>
              </Link>
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
}
