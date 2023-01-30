import { useNavigation } from 'react-router-dom';

const useNavigationStatus = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  const isLoading = navigation.state === 'loading';
  const isRedirecting =
    navigation.state === 'loading' &&
    navigation.formData != null &&
    navigation.formAction !== navigation.location.pathname;

  return { isSubmitting, isRedirecting, isLoading };
};

export default useNavigationStatus;
