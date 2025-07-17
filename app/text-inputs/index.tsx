import ThemedInput from '@/components/ThemedInput';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import ThemedCard from '../../components/ThemedCard';

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChangeText = ({
    name,
    email,
    phone,
  }: {
    name?: string;
    email?: string;
    phone?: string;
  }) => {
    setForm({
      name: name ?? form.name,
      email: email ?? form.email,
      phone: phone ?? form.phone,
    });
  };

  return (
    // KeyboardAvoidingView Permite cuando haya un campo de texto que el teclado lo oculta que se corrija ese comportamiento
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemedView className="mx-5 my-10">
          <ThemedCard className="mb-5">
            <ThemedInput
              onChangeText={(text) => onChangeText({ name: text })}
              placeholder="Nombre"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <ThemedInput
              onChangeText={(text) => onChangeText({ email: text })}
              placeholder="Correo"
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="email-address"
              className="pt-5"
            />
            <ThemedInput
              onChangeText={(text) => onChangeText({ phone: text })}
              placeholder="Teléfono"
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="phone-pad"
              className="pt-5"
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard
            className="mb-5"
            style={{
              marginBottom: isIOS ? 100 : 10,
            }}
          >
            <ThemedInput
              onChangeText={(text) => onChangeText({ phone: text })}
              placeholder="Teléfono"
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="phone-pad"
              className="pt-5"
            />
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
