import FormGroupInput from "./Inputs/formGroupInput.vue";

import DropDown from "./Dropdown.vue";
import PaperTable from "./PaperTable.vue";
import Button from "./Button";
import Modal from "./Modal";

import Card from "./Cards/Card.vue";

import StatsCard from "./Cards/StatsCard.vue";
import AddStatsCard from "./Cards/AddStatsCard.vue";

import SidebarPlugin from "./SidebarPlugin/index";

import SettingsItem from "./Settings/SettingsItem.vue";


let components = {
  FormGroupInput,
  Card,
  StatsCard,
  AddStatsCard,
  PaperTable,
  DropDown,
  SidebarPlugin,
  SettingsItem
};

export default components;

export {
  FormGroupInput,
  Card,
  StatsCard,
  AddStatsCard,
  PaperTable,
  DropDown,
  Button,
  Modal,
  SidebarPlugin,
  SettingsItem,
};