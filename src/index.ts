import { Bundle } from '@lisa-env/type';
import gcc from '@binary/gcc-xtensa-esp32-elf';

export default <Bundle>{
  binaries: [
    'gcc-xtensa-esp32-elf',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'espressif',
    ESPRESSIF_TOOLCHAIN_PATH: gcc.homeDir,
  },
};
