pragma solidity ^0.4.24;

contract BinaryIntSum {

    /**
     * @dev 计算输入的 10 个整数经“二进制位”数值最小化变换之后的总和
     *
     * @param input 给定的 10 个 uint16 类型的整数
     * @return 输入数组中每个整数经 getMinimalBinaryInt 变换后的结果的总和
     */
    function runMinimalBinaryIntSum(uint16[10] input)
        public pure returns(uint32)
    {
        uint32 result;
        for (uint8 i; i < 10; i++) {
            result += getMinimalBinaryInt(input[i]);
        }
        return result;
    }
    
    /**
     * @dev 将输入整数的所有二进制位重新排序，成为一个新的整数，使此整数数值尽量小
     * @param input 给定的 uint16 类型的整数
     * @return 经变换后的新整数
     */
    function getMinimalBinaryInt(uint16 input)
        internal pure returns(uint16 nv)
    {
        // To be completed
    }
}
