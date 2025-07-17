import ThemedSwitch from '@/components/ThemedSwitch';
import ThemedView from '@/components/ThemedView';
import { useState } from 'react';
import ThemedCard from '../../components/ThemedCard';

const Switches = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });
  const toggleSwitch = ({
    isActive,
    isHungry,
    isHappy,
  }: {
    isActive?: boolean;
    isHungry?: boolean;
    isHappy?: boolean;
  }) => {
    setState({
      isActive: isActive ?? state.isActive,
      isHungry: isHungry ?? state.isHungry,
      isHappy: isHappy ?? state.isHappy,
    });
  };

  return (
    <ThemedView className="mx-10 my-10">
      <ThemedCard>
        <ThemedSwitch
          onValueChange={() => toggleSwitch({ isActive: !state.isActive })}
          value={state.isActive}
          text="Estoy activo"
        />
        <ThemedSwitch
          onValueChange={() => toggleSwitch({ isHappy: !state.isHappy })}
          value={state.isHappy}
          text="Estoy feliz"
          className="mt-5"
        />
        <ThemedSwitch
          onValueChange={() => toggleSwitch({ isHungry: !state.isHungry })}
          value={state.isHungry}
          text="Estoy hambriento"
          className="mt-5"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
