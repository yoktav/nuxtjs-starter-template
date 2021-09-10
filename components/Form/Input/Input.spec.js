import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import Input from './Input.vue';

describe('Input.vue component', () => {
  const localVue = createLocalVue();

  it('Check input has c-input class', () => {
    const wrapper = mount(Input, {
      localVue,
      propsData: {
        tag: 'input', // Required
      },
    });

    expect(wrapper.classes()).toContain('c-input');
  });

  describe('Check is-valid class working properly', () => {
    it('Check input has is-valid if isValid is true', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          isValid: true,
        },
      });

      expect(wrapper.classes()).toContain('is-valid');
    });

    it('Check input do not has is-valid if isValid is false', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.classes()).not.toContain('is-valid');
    });
  });

  describe('Check is-invalid class working properly', () => {
    it('Check input has is-invalid if isInvalid is true', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          isInvalid: true,
        },
      });

      expect(wrapper.classes()).toContain('is-invalid');
    });

    it('Check input do not has is-invalid if isInvalid is false', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.classes()).not.toContain('is-invalid');
    });
  });

  describe('Check is-warning class working properly', () => {
    it('Check input has is-warning if isWarning is true', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          isWarning: true,
        },
      });

      expect(wrapper.classes()).toContain('is-warning');
    });

    it('Check input do not has is-warning if isWarning is false', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.classes()).not.toContain('is-warning');
    });
  });

  it('Check c-input__text working properly', () => {
    const wrapper = mount(Input, {
      localVue,
      propsData: {
        tag: 'input', // Required
        hasLabelText: true,
      },
    });

    expect(wrapper.html().includes('c-input__text')).toBe(true);
  });

  it('Check labelText working properly', () => {
    const LABEL_TEXT = 'Sample Label Text';

    const wrapper = mount(Input, {
      localVue,
      propsData: {
        tag: 'input', // Required
        hasLabelText: true,
        labelText: LABEL_TEXT,
      },
    });

    expect(wrapper.find('.c-input__text').text()).toEqual(LABEL_TEXT);
  });

  it('Check id attribute working properly', () => {
    const wrapper = mount(Input, {
      localVue,
      propsData: {
        tag: 'input', // Required
        id: 2,
      },
    });

    expect(wrapper.find('.c-input__control').attributes('id')).toContain('input-2');
  });

  it('Check type attribute working properly', () => {
    const wrapper = mount(Input, {
      localVue,
      propsData: {
        tag: 'input', // Required
        inputType: 'text',
      },
    });

    expect(wrapper.find('.c-input__control').attributes('type')).toContain('text');
  });

  describe('Check inputElement working properly', () => {
    it('Check if inputElement is input', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          inputElement: 'input',
        },
      });

      expect(wrapper.find('.c-input__control').classes()).not.toContain(
        'c-input__control--textarea',
      );
    });

    it('Check if inputElement is not input', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          inputElement: 'textarea',
        },
      });

      expect(wrapper.find('.c-input__control').classes()).toContain('c-input__control--textarea');
    });
  });

  describe('Check maxLength attribute working properly', () => {
    it('Check if maxLength has value', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          maxlength: '10',
        },
      });

      expect(wrapper.find('.c-input__control').attributes('maxlength')).toBe('10');
    });

    it('Check if maxLength is null', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.find('.c-input__control').attributes('maxlength')).toBeUndefined();
    });
  });

  describe('Check name attribute working properly', () => {
    it('Check if name has value', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          name: 'sampleName',
        },
      });

      expect(wrapper.find('.c-input__control').attributes('name')).toBe('sampleName');
    });

    it('Check if name is null', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.find('.c-input__control').attributes('name')).toBeUndefined();
    });
  });

  describe('Check value attribute working properly', () => {
    it('Check if value has value', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          value: 'lorem ipsum',
        },
      });

      expect(wrapper.find('.c-input__control').attributes('value')).toBe('lorem ipsum');
    });

    it('Check if value is null', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.find('.c-input__control').attributes('value')).toBeUndefined();
    });
  });

  describe('Check placeholder attribute working properly', () => {
    it('Check if placeholder has value', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          placeholder: 'lorem ipsum',
        },
      });

      expect(wrapper.find('.c-input__control').attributes('placeholder')).toBe('lorem ipsum');
    });

    it('Check if placeholder is null', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.find('.c-input__control').attributes('placeholder')).toBeUndefined();
    });
  });

  describe('Check disabled attribute working properly', () => {
    it('Check if isDisabled is true', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          isDisabled: true,
        },
      });

      expect(wrapper.find('.c-input__control').attributes('disabled')).toBe('disabled');
    });

    it('Check if isDisabled is false', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.find('.c-input__control').attributes('disabled')).toBeUndefined();
    });
  });

  describe('Check readonly attribute working properly', () => {
    it('Check if isReadonly is true', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
          isReadonly: true,
        },
      });

      expect(wrapper.find('.c-input__control').attributes('readonly')).toBe('readonly');
    });

    it('Check if isReadonly is false', () => {
      const wrapper = mount(Input, {
        localVue,
        propsData: {
          tag: 'input', // Required
        },
      });

      expect(wrapper.find('.c-input__control').attributes('readonly')).toBeUndefined();
    });
  });

  it('Check input calls handleChange function on change', async () => {
    const wrapper = mount(Input, {
      localVue,
      propsData: {
        tag: 'input', // Required
      },
    });

    const handleChange = jest.spyOn(wrapper.vm, 'handleChange');
    await wrapper.vm.handleChange();

    wrapper.find('.c-input__control').trigger('change');

    expect(handleChange).toHaveBeenCalled();
  });
});
