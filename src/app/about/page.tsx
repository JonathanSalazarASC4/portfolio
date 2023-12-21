"use client";

import React from "react";

import styles from "./about.module.css";

enum TabEnum {
  UXDesign,
  Figma,
  UserFlow,
  Wireframing,
  Prototyping,
  AWSCloud,
}

const Content = ({ tab }: { tab: TabEnum }) => {
  switch (tab) {
    case TabEnum.UXDesign:
      return (
        <div>
          At Commvault, I've sharpened my UX design skills, mastering everything
          from typography to user experience strategies. It's been more than
          just design; I've learned to translate these concepts into
          business-savvy solutions, especially in the SaaS realm, making sure
          they resonate with both users and stakeholders.
        </div>
      );
  }
  return <div>{tab}</div>;
};

const About = () => {
  const [activeTab, setActiveTab] = React.useState<TabEnum>(TabEnum.UXDesign);
  const [hoveredTab, setHoveredTab] = React.useState<TabEnum | null>(null);

  return (
    <div
      style={{
        padding: "32px 0px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div>Expertise</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Tab
          setActiveTab={setActiveTab}
          setHoveredTab={setHoveredTab}
          tabID={TabEnum.UXDesign}
          activeTab={activeTab}
          hoveredTab={hoveredTab}
        >
          UX Design
        </Tab>
        <Tab
          setActiveTab={setActiveTab}
          setHoveredTab={setHoveredTab}
          tabID={TabEnum.Figma}
          activeTab={activeTab}
          hoveredTab={hoveredTab}
        >
          Figma
        </Tab>
        <Tab
          setActiveTab={setActiveTab}
          setHoveredTab={setHoveredTab}
          activeTab={activeTab}
          hoveredTab={hoveredTab}
          tabID={TabEnum.UserFlow}
        >
          User Flow
        </Tab>
        <Tab
          setActiveTab={setActiveTab}
          setHoveredTab={setHoveredTab}
          activeTab={activeTab}
          hoveredTab={hoveredTab}
          tabID={TabEnum.Wireframing}
        >
          Wire framing
        </Tab>
        <Tab
          setActiveTab={setActiveTab}
          setHoveredTab={setHoveredTab}
          activeTab={activeTab}
          hoveredTab={hoveredTab}
          tabID={TabEnum.Prototyping}
        >
          Prototyping
        </Tab>
        <Tab2
          onMouseEnter={() => {
            setHoveredTab(TabEnum.AWSCloud);
          }}
          onMouseLeave={() => {
            setHoveredTab(null);
          }}
          onClick={() => {
            setActiveTab(TabEnum.AWSCloud);
          }}
          isActive={activeTab === TabEnum.AWSCloud}
          isHovered={hoveredTab === TabEnum.AWSCloud}
        >
          AWS Cloud
        </Tab2>
      </div>
      <Content tab={hoveredTab ?? activeTab} />
    </div>
  );
};

const Tab = ({
  children,
  setActiveTab,
  setHoveredTab,
  tabID,
  hoveredTab,
  activeTab,
}: {
  children: React.ReactNode;
  setActiveTab: (tabID: TabEnum) => void;
  setHoveredTab: (tabID: TabEnum | null) => void;
  tabID: TabEnum;
  activeTab: TabEnum;
  hoveredTab: TabEnum | null;
}) => {
  return (
    <div
      className={`${styles.tab} ${
        activeTab === tabID ? styles.activeTab : ""
      } ${hoveredTab === tabID ? styles.hoveredTab : ""}`}
      onMouseEnter={() => {
        setHoveredTab(tabID);
      }}
      onMouseLeave={() => {
        setHoveredTab(null);
      }}
      onClick={() => {
        setActiveTab(tabID);
      }}
    >
      {children}
    </div>
  );
};

const Tab2 = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isActive,
  isHovered,
}: {
  children: React.ReactNode;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActive: boolean;
  isHovered: boolean;
}) => {
  return (
    <div
      className={`${styles.tab} ${isActive ? styles.activeTab : ""} ${
        isHovered ? styles.hoveredTab : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default About;
