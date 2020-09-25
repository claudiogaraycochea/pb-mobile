import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Container } from './src/ui/Theme';
import Home from './src/pages/home/Home';
import { NativeRouter, Route, Link } from "react-router-native";

function Sandwiches() {
  return <Text style={styles.header}>Sandwiches</Text>;
}

function Tacos() {
  return <Text style={styles.header}>Tacos</Text>;
}

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos
  },
  {
    path: "/home",
    component: Home
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        {/*<View style={styles.nav}>
          <Link to="/tacos" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Tacos</Text>
          </Link>
          <Link to="/sandwiches" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Sandwiches</Text>
          </Link>
          <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
        </View>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} styles={{ width: '100%', backgroundColor: 'red'}} />
        ))}*/}
        <Home/>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#192744',
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subHeader: {
    fontSize: 15
  }
});
/*
export default function App() {
  return (
    <Container>
      <Home/>
    </Container>
  );
}*/
