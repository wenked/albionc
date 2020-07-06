type myRecipe = { recipe: string; refined: string };

const getRecipe = (rawResourceName: string): myRecipe => {
	switch (rawResourceName) {
		case 'T4_FIBER':
			return { recipe: 'T3_CLOTH', refined: 'T4_CLOTH' };
		case 'T4_FIBER_LEVEL1@1':
			return { recipe: 'T3_CLOTH', refined: 'T4_CLOTH_LEVEL1@1' };
		case 'T4_FIBER_LEVEL2@2':
			return { recipe: 'T3_CLOTH', refined: 'T4_CLOTH_LEVEL2@2' };
		case 'T4_FIBER_LEVEL3@3':
			return { recipe: 'T3_CLOTH', refined: 'T4_CLOTH_LEVEL3@3' };
		case 'T5_FIBER':
			return { recipe: 'T4_CLOTH', refined: 'T5_CLOTH' };
		case 'T5_FIBER_LEVEL1@1':
			return { recipe: 'T4_CLOTH_LEVEL1@1', refined: 'T5_CLOTH_LEVEL1@1' };
		case 'T5_FIBER_LEVEL2@2':
			return { recipe: 'T4_CLOTH_LEVEL2@2', refined: 'T5_CLOTH_LEVEL2@2' };
		case 'T5_FIBER_LEVEL3@3':
			return { recipe: 'T4_CLOTH_LEVEL3@3', refined: 'T5_CLOTH_LEVEL3@3' };
		case 'T6_FIBER':
			return { recipe: 'T5_CLOTH', refined: 'T6_CLOTH' };
		case 'T6_FIBER_LEVEL1@1':
			return { recipe: 'T5_CLOTH_LEVEL1@1', refined: 'T6_CLOTH_LEVEL1@1' };
		case 'T6_FIBER_LEVEL2@2':
			return { recipe: 'T5_CLOTH_LEVEL2@2', refined: 'T6_CLOTH_LEVEL2@2' };
		case 'T6_FIBER_LEVEL3@3':
			return { recipe: 'T5_CLOTH_LEVEL3@3', refined: 'T6_CLOTH_LEVEL3@3' };
		case 'T7_FIBER':
			return { recipe: 'T6_CLOTH', refined: 'T7_CLOTH' };
		case 'T7_FIBER_LEVEL1@1':
			return { recipe: 'T6_CLOTH_LEVEL1@1', refined: 'T7_CLOTH_LEVEL1@1' };
		case 'T7_FIBER_LEVEL2@2':
			return { recipe: 'T6_CLOTH_LEVEL2@2', refined: 'T7_CLOTH_LEVEL2@2' };
		case 'T7_FIBER_LEVEL3@3':
			return { recipe: 'T6_CLOTH_LEVEL3@3', refined: 'T7_CLOTH_LEVEL3@3' };
		case 'T8_FIBER':
			return { recipe: 'T7_CLOTH', refined: 'T8_CLOTH' };
		case 'T8_FIBER_LEVEL1@1':
			return { recipe: 'T7_CLOTH_LEVEL1@1', refined: 'T8_CLOTH_LEVEL1@1' };
		case 'T8_FIBER_LEVEL2@2':
			return { recipe: 'T7_CLOTH_LEVEL2@2', refined: 'T8_CLOTH_LEVEL2@2' };
		case 'T8_FIBER_LEVEL3@3':
			return { recipe: 'T7_CLOTH_LEVEL3@3', refined: 'T8_CLOTH_LEVEL3@3' };
		case 'T4_HIDE':
			return { recipe: 'T3_LEATHER', refined: 'T4_LEATHER' };
		case 'T4_HIDE_LEVEL1@1':
			return { recipe: 'T3_LEATHER', refined: 'T4_LEATHER_LEVEL1@1' };
		case 'T4_HIDE_LEVEL2@2':
			return { recipe: 'T3_LEATHER', refined: 'T4_LEATHER_LEVEL2@2' };
		case 'T4_HIDE_LEVEL3@3':
			return { recipe: 'T3_LEATHER', refined: 'T4_LEATHER_LEVEL3@3' };
		case 'T5_HIDE':
			return { recipe: 'T4_LEATHER', refined: 'T5_LEATHER' };
		case 'T5_HIDE_LEVEL1@1':
			return { recipe: 'T4_LEATHER_LEVEL1@1', refined: 'T5_LEATHER_LEVEL1@1' };
		case 'T5_HIDE_LEVEL2@2':
			return { recipe: 'T4_LEATHER_LEVEL2@2', refined: 'T5_LEATHER_LEVEL2@2' };
		case 'T5_HIDE_LEVEL3@3':
			return { recipe: 'T4_LEATHER_LEVEL3@3', refined: 'T5_LEATHER_LEVEL3@3' };
		case 'T6_HIDE':
			return { recipe: 'T5_LEATHER', refined: 'T6_LEATHER' };
		case 'T6_HIDE_LEVEL1@1':
			return { recipe: 'T5_LEATHER_LEVEL1@1', refined: 'T6_LEATHER_LEVEL1@1' };
		case 'T6_HIDE_LEVEL2@2':
			return { recipe: 'T5_LEATHER_LEVEL2@2', refined: 'T6_LEATHER_LEVEL2@2' };
		case 'T6_HIDE_LEVEL3@3':
			return { recipe: 'T5_LEATHER_LEVEL3@3', refined: 'T6_LEATHER_LEVEL3@3' };
		case 'T7_HIDE':
			return { recipe: 'T6_LEATHER', refined: 'T7_LEATHER' };
		case 'T7_HIDE_LEVEL1@1':
			return { recipe: 'T6_LEATHER_LEVEL1@1', refined: 'T7_LEATHER_LEVEL1@1' };
		case 'T7_HIDE_LEVEL2@2':
			return { recipe: 'T6_LEATHER_LEVEL2@2', refined: 'T7_LEATHER_LEVEL2@2' };
		case 'T7_HIDE_LEVEL3@3':
			return { recipe: 'T6_LEATHER_LEVEL3@3', refined: 'T7_LEATHER_LEVEL3@3' };
		case 'T8_HIDE':
			return { recipe: 'T7_LEATHER', refined: 'T8_LEATHER' };
		case 'T8_HIDE_LEVEL1@1':
			return { recipe: 'T7_LEATHER_LEVEL1@1', refined: 'T8_LEATHER_LEVEL1@1' };
		case 'T8_HIDE_LEVEL2@2':
			return { recipe: 'T7_LEATHER_LEVEL2@2', refined: 'T8_LEATHER_LEVEL2@2' };
		case 'T8_HIDE_LEVEL3@3':
			return { recipe: 'T7_LEATHER_LEVEL3@3', refined: 'T8_LEATHER_LEVEL3@3' };
		case 'T4_ORE':
			return { recipe: 'T3_METALBAR', refined: 'T4_METALBAR' };
		case 'T4_ORE_LEVEL1@1':
			return { recipe: 'T3_METALBAR', refined: 'T4_METALBAR_LEVEL1@1' };
		case 'T4_ORE_LEVEL2@2':
			return { recipe: 'T3_METALBAR', refined: 'T4_METALBAR_LEVEL2@2' };
		case 'T4_ORE_LEVEL3@3':
			return { recipe: 'T3_METALBAR', refined: 'T4_METALBAR_LEVEL3@3' };
		case 'T5_ORE':
			return { recipe: 'T4_METALBAR', refined: 'T5_METALBAR' };
		case 'T5_ORE_LEVEL1@1':
			return {
				recipe: 'T4_METALBAR_LEVEL1@1',
				refined: 'T5_METALBAR_LEVEL1@1',
			};
		case 'T5_ORE_LEVEL2@2':
			return {
				recipe: 'T4_METALBAR_LEVEL2@2',
				refined: 'T5_METALBAR_LEVEL2@2',
			};
		case 'T5_ORE_LEVEL3@3':
			return {
				recipe: 'T4_METALBAR_LEVEL3@3',
				refined: 'T5_METALBAR_LEVEL3@3',
			};
		case 'T6_ORE':
			return { recipe: 'T5_METALBAR', refined: 'T6_METALBAR' };
		case 'T6_ORE_LEVEL1@1':
			return {
				recipe: 'T5_METALBAR_LEVEL1@1',
				refined: 'T6_METALBAR_LEVEL1@1',
			};
		case 'T6_ORE_LEVEL2@2':
			return {
				recipe: 'T5_METALBAR_LEVEL2@2',
				refined: 'T6_METALBAR_LEVEL2@2',
			};
		case 'T6_ORE_LEVEL3@3':
			return {
				recipe: 'T5_METALBAR_LEVEL3@3',
				refined: 'T6_METALBAR_LEVEL3@3',
			};
		case 'T7_ORE':
			return { recipe: 'T6_METALBAR', refined: 'T7_METALBAR' };
		case 'T7_ORE_LEVEL1@1':
			return {
				recipe: 'T6_METALBAR_LEVEL1@1',
				refined: 'T7_METALBAR_LEVEL1@1',
			};
		case 'T7_ORE_LEVEL2@2':
			return {
				recipe: 'T6_METALBAR_LEVEL2@2',
				refined: 'T7_METALBAR_LEVEL2@2',
			};
		case 'T7_ORE_LEVEL3@3':
			return {
				recipe: 'T6_METALBAR_LEVEL3@3',
				refined: 'T7_METALBAR_LEVEL3@3',
			};
		case 'T8_ORE':
			return { recipe: 'T7_METALBAR', refined: 'T8_METALBAR' };
		case 'T8_ORE_LEVEL1@1':
			return {
				recipe: 'T7_METALBAR_LEVEL1@1',
				refined: 'T8_METALBAR_LEVEL1@1',
			};
		case 'T8_ORE_LEVEL2@2':
			return {
				recipe: 'T7_METALBAR_LEVEL2@2',
				refined: 'T8_METALBAR_LEVEL2@2',
			};
		case 'T8_ORE_LEVEL3@3':
			return {
				recipe: 'T7_METALBAR_LEVEL3@3',
				refined: 'T8_METALBAR_LEVEL3@3',
			};
		case 'T4_WOOD':
			return { recipe: 'T3_PLANKS', refined: 'T4_PLANKS' };
		case 'T4_WOOD_LEVEL1@1':
			return { recipe: 'T3_PLANKS', refined: 'T4_PLANKS_LEVEL1@1' };
		case 'T4_WOOD_LEVEL2@2':
			return { recipe: 'T3_PLANKS', refined: 'T4_PLANKS_LEVEL2@2' };
		case 'T4_WOOD_LEVEL3@3':
			return { recipe: 'T3_PLANKS', refined: 'T4_PLANKS_LEVEL3@3' };
		case 'T5_WOOD':
			return { recipe: 'T4_PLANKS', refined: 'T5_PLANKS' };
		case 'T5_WOOD_LEVEL1@1':
			return { recipe: 'T4_PLANKS_LEVEL1@1', refined: 'T5_PLANKS_LEVEL1@1' };
		case 'T5_WOOD_LEVEL2@2':
			return { recipe: 'T4_PLANKS_LEVEL2@2', refined: 'T5_PLANKS_LEVEL2@2' };
		case 'T5_WOOD_LEVEL3@3':
			return { recipe: 'T4_PLANKS_LEVEL3@3', refined: 'T5_PLANKS_LEVEL3@3' };
		case 'T6_WOOD':
			return { recipe: 'T5_PLANKS', refined: 'T6_PLANKS' };
		case 'T6_WOOD_LEVEL1@1':
			return { recipe: 'T5_PLANKS_LEVEL1@1', refined: 'T6_PLANKS_LEVEL1@1' };
		case 'T6_WOOD_LEVEL2@2':
			return { recipe: 'T5_PLANKS_LEVEL2@2', refined: 'T6_PLANKS_LEVEL2@2' };
		case 'T6_WOOD_LEVEL3@3':
			return { recipe: 'T5_PLANKS_LEVEL3@3', refined: 'T6_PLANKS_LEVEL3@3' };
		case 'T7_WOOD':
			return { recipe: 'T6_PLANKS', refined: 'T7_PLANKS' };
		case 'T7_WOOD_LEVEL1@1':
			return { recipe: 'T6_PLANKS_LEVEL1@1', refined: 'T7_PLANKS_LEVEL1@1' };
		case 'T7_WOOD_LEVEL2@2':
			return { recipe: 'T6_PLANKS_LEVEL2@2', refined: 'T7_PLANKS_LEVEL2@2' };
		case 'T7_WOOD_LEVEL3@3':
			return { recipe: 'T6_PLANKS_LEVEL3@3', refined: 'T7_PLANKS_LEVEL3@3' };
		case 'T8_WOOD':
			return { recipe: 'T7_PLANKS', refined: 'T8_PLANKS' };
		case 'T8_WOOD_LEVEL1@1':
			return { recipe: 'T7_PLANKS_LEVEL1@1', refined: 'T8_PLANKS_LEVEL1@1' };
		case 'T8_WOOD_LEVEL2@2':
			return { recipe: 'T7_PLANKS_LEVEL2@2', refined: 'T8_PLANKS_LEVEL2@2' };
		case 'T8_WOOD_LEVEL3@3':
			return { recipe: 'T7_PLANKS_LEVEL3@3', refined: 'T8_PLANKS_LEVEL3@3' };
		case 'T4_ROCK':
			return { recipe: 'T3_STONEBLOCK', refined: 'T4_STONEBLOCK' };
		case 'T5_ROCK':
			return { recipe: 'T4_STONEBLOCK', refined: 'T5_STONEBLOCK' };
		case 'T6_ROCK':
			return { recipe: 'T5_STONEBLOCK', refined: 'T6_STONEBLOCK' };
		case 'T7_ROCK':
			return { recipe: 'T6_STONEBLOCK', refined: 'T7_STONEBLOCK' };
		case 'T8_ROCK':
			return { recipe: 'T7_STONEBLOCK', refined: 'T8_STONEBLOCK' };
		default:
			return { recipe: '', refined: '' };
	}
};

export default getRecipe;
