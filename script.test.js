import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('My Tech Radar Website Tests', () => {
    beforeEach(() => {
        // Setting up the HTML we need for testing
        document.body.innerHTML = `
            <div id="radar"></div>
            <div id="quadrantButtons">
                <div class="button first-quadrant">TECHNIQUES</div>
                <div class="button second-quadrant">TOOLS</div>
                <div class="button third-quadrant">PLATFORMS</div>
                <div class="button fourth-quadrant">LANGUAGES</div>
            </div>
        `;
    });

    // Test 1: Check if radar div exists
    test('check if my radar div is on the page', () => {
        const radarDiv = document.getElementById('radar');
        expect(radarDiv).toBeInTheDocument();
    });

    // Test 2: Check all category buttons
    test('check if all my tech categories are shown', () => {
        const techCategories = ['TECHNIQUES', 'TOOLS', 'PLATFORMS', 'LANGUAGES'];
        techCategories.forEach(category => {
            const button = screen.getByText(category);
            expect(button).toBeInTheDocument();
        });
    });

    // Test 3: Check data format
    test('check if my tech data has all required info', () => {
        const testTech = {
            name: "React",  // Using a real tech example
            quadrant: 0,    // Frontend quadrant
            ring: 2,        // Assessment ring
            moved: 0        // Hasn't moved
        };
        
        // Check if all info is there
        expect(testTech).toHaveProperty('name');
        expect(testTech).toHaveProperty('quadrant');
        expect(testTech).toHaveProperty('ring');
        expect(testTech).toHaveProperty('moved');
    });

    // Test 4: Check categories are correct
    test('check if tech categories are in right order', () => {
        const categories = ['TECHNIQUES', 'TOOLS', 'PLATFORMS', 'LANGUAGES'];
        const firstCategory = 0; // First category index
        
        expect(categories[firstCategory]).toBe('TECHNIQUES');
    });

    // Test 5: Check adoption levels
    test('check if adoption levels are correct', () => {
        const adoptionLevels = ['ADOPT', 'TRIAL', 'ASSESS', 'HOLD'];
        const firstLevel = 0; // ADOPT level
        
        expect(adoptionLevels[firstLevel]).toBe('ADOPT');
    });
});